import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import { Body, JsonController, Post, Res,Param } from 'routing-controllers';
import Author from '../models/Author';
import User from '../models/User';


@JsonController()
export default class AuthorController {
  @Post('/author/:id')
  async post(@Param('id') id: number, @Body() authorData: any, @Res() res: any) {
  let userLink = []
  
    try{
      const userRepository = getRepository(User);
      userLink = await userRepository.find({
        where: {
            id:id
        },
    })
    }catch(err){
      return res.send(err);
    }
   
   let author = new Author();
   console.log(userLink)
    author = Object.assign(author, authorData);
    const errors = await validate(author);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }
    const authorRepo = getRepository(Author);
    
    author.user = userLink
    try {
      author = await authorRepo.save(author);
    } catch (error) {
      return res.status(409).send('Email already in use');
    }
    return author;
  }
  
}
