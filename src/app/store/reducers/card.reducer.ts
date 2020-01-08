import { Card } from 'src/app/models/Card';
import { CardActions, CardActionTypes } from '../actions/card.actions';

export interface CardState {
    paymentFail: boolean;
}

const initialCardState: CardState = {
    paymentFail: false
};

export default function cardReducer(state: CardState = initialCardState, action: CardActions): CardState {
    switch (action.type) {
        case CardActionTypes.PaymentFail: {
            return{
                paymentFail: false
            };
        }
        default:
            return state;
    }
}
