import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/updete-person-dto';
import { Person } from './Enitity/person.entity';

@Resolver()
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => [Person])
  async getAllPerson() {
    return await this.personService.findAll();
  }

  @Query(() => [Person])
  async getPersonByName(@Args('data') data: string): Promise<Person[]> {
    return await this.personService.findPersonByName(data);
  }

  // @Query(() => [Person])
  // async getPersonByCountry(@Args('data') data: string): Promise<Person[]> {
  //   return await this.personService.findPersonByCountry(data);
  // }

  @Query(() => Person)
  async getPersonById(@Args('_id') _id: string) {
    return await this.personService.getPersonById(_id);
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('_id') _id: string,
    @Args('updatePersonDto') updatePersonDto: UpdatePersonDto,
  ) {
    console.log(updatePersonDto);
    return this.personService.update(_id, updatePersonDto);
  }

  @Mutation(() => Person)
  async deletePerson(@Args('_id') _id: string) {
    return this.personService.delete(_id);
  }
  @Mutation(() => Person)
  addPerson(@Args('createPersonDto') createPersonDto: CreatePersonDto) {
    return this.personService.addPerson(createPersonDto);
  }
}
