import { User } from "../../user/entities/user.entity";
import { Category } from "../../category/entities/category.entity";
export declare class Transaction {
    id: number;
    title: string;
    type: string;
    user: User;
    category: Category;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}
