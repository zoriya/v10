export interface Text {
  readonly key: string;
  readonly text: string;
}

export function isText(value: unknown): value is Text {
  return typeof value === 'object' && value !== null && 'key' in value && 'text' in value;
}

export type TextParams = Record<string, string | number>;

export function textValue(value: Text | string): string {
  return typeof value === 'string' ? value : value.text;
}
