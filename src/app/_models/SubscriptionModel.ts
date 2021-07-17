import {SUB_DURATION} from "../_enumerations/SUB_DURATION";
import {SUB_AMOUNT} from "../_enumerations/SUB_AMOUNT";

export class SubscriptionModel {
    duration: SUB_DURATION;
    amount: SUB_AMOUNT;
    upfrontPayment: boolean;
}
