import { ConditionDto } from "./condition.dto.interface";

export interface PaginationDto {
    Entity: string;
    StartAt: number;
    Get: number;
    Conditions: ConditionDto[];
}
