import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    constructor() { }

    @Get()
    getCat() {
        return 'cats';
    }
}