import { Model } from "mongoose";
import { CreateCardDTO } from "src/models/dto/createCardDTO";

export class CardsService {
    private cards: Model<CreateCardDTO>;
    constructor(cards: Model<CreateCardDTO>) {
        this.cards = cards;
    }

    /**
     * Create card
     * @param params
     */
    protected async createCard(params: CreateCardDTO): Promise<CreateCardDTO> {
        try {
            return await this.cards.create(params);

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    /**
     * Query card by id
     * @param id
     */
    protected async findOneCardById(token: string) {

        try {

            const data = await this.cards.findOne({ token: token }).select("-_id card_number expiration_month expiration_year email token");
            console.log(data);
            return data;

        } catch (err) {
            console.error(err);
            throw err;
        }

    }
}
