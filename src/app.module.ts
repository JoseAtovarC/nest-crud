import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://toto:20445718@cluster0.ze4te.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), ProductModule,

]
  
})
export class AppModule {}
