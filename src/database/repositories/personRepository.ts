import { PersonEntity } from '../entities';
import { PersonDTO } from '../../dto';

export class PersonRepository {
    async find() {
        const person = await PersonEntity.find();

        return person;
    };

    async findOne(id: string) {
        const person = await PersonEntity.findOne(id);

        return person;
    };

    async create(personDTO: PersonDTO) {
        const person = new PersonEntity(
            personDTO.name,
            personDTO.profile,
            personDTO.addressId,
            personDTO.experienceId,
            personDTO.contactId,
            personDTO.languagesId,
            personDTO.skillsId
        );

        person.save();

        return person;
    };

    async update(personDTO: PersonDTO) {
        const person = await PersonEntity.findOne(personDTO.id);

        if (person) {
            person.name = personDTO.name;
            await person.save();
        };
        
        return person;
    };

    async delete(personID: string) {
        await PersonEntity.delete(personID);
    };
}