import { Category } from "../entities/category-entity";

export class CategoryService {
    async create(): Promise<Category> {
        const category = new Category({
            title: "Example category",
            color: "#ff33bb"
        })
        return category
    }
}