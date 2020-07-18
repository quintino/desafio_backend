export class CreateCatDto {
    @IsString()
    readonly name: string;
  
    @IsInt()
    readonly age: number;
  
    @IsString()
    readonly breed: string;
  }