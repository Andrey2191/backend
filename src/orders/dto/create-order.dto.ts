export class CreateOrderDto {
  readonly name: string;

  readonly address: string;

  readonly telephone: string;

  readonly email: string;

  readonly cost: number;

  readonly pizzas: object[];

  readonly sauces: object[];

  readonly totalCount: number;
}
