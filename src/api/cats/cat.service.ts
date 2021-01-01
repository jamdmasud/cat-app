import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './interfaces/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: CreateCatDto) {
        const dto = { name: cat.name, age: cat.age, breed: cat.breed };
        this.cats.push(dto);
        return dto;
    }

    update(cat: UpdateCatDto) {
        const dto = { name: cat.name, age: cat.age, breed: cat.breed };

        this.cats.push(dto);
        return dto;
    }
    findOne(id: number) {
        if(!this.cats || this.cats.length <= 0)
            throw new NotFoundException("No cat available at this moment.");

        if(this.cats.length <= id || id < 0){
            throw new NotFoundException("The cat is not available");
        }

        return this.cats[id];
    }

    findAll(): Cat[] {
        return this.cats;
    }

    delete(id: number) {
        console.log(`data deleted for ${id}`);
    }
}