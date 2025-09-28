import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getByStoreId(storeId: string) {
    return this.prisma.category.findMany({ where: { storeId } });
  }

  async getById(id: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) throw new NotFoundException('Could not find category');

    return category;
  }

  async create(storeId: string, dto: CategoryDto) {
    return this.prisma.category.create({
      data: { title: dto.title, description: dto.description, storeId },
    });
  }

  async update(id: string, dto: CategoryDto) {
    const category = await this.getById(id);

    return this.prisma.category.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: string) {
    await this.getById(id);

    return this.prisma.category.delete({
      where: { id },
    });
  }
}
