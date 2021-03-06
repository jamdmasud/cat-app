import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UpdateCatDto {
    @ApiProperty({type:'number', name:'id', example: 1, required: true})
    @IsNumber()
    id: number;

    @ApiProperty({type:'string', name:'name', example:'Pushi', required: true})
    @IsString({message:"Name is required."})
    name: string;

    @ApiProperty({type:'string', name:'age', example: "3 years"})
    @IsString()
    age: string;

    @ApiProperty({type:'string', name:'breed', example: 'child'})
    @IsString({message:"Breed is required."})
    color: string;
}