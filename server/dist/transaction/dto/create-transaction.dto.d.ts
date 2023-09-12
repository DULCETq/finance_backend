import { Category } from "../../category/entities/category.entity";
import { User } from "../../user/entities/user.entity";
export declare class CreateTransactionDto {
    title: string;
    amount: number;
    type: 'expense' | 'income';
    category: Category;
    user: User;
}
