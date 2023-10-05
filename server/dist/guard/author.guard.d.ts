import { CanActivate, ExecutionContext } from "@nestjs/common";
import { TransactionService } from "../transaction/transaction.service";
import { CategoryService } from "../category/category.service";
export declare class AuthorGuard implements CanActivate {
    private readonly transactionService;
    private readonly categoryService;
    constructor(transactionService: TransactionService, categoryService: CategoryService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
