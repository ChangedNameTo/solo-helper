enum MessageType {
  Text = "Text",
  Command = "Command",
}

export interface MessagesAction {
  type: string;
  text: any;
  date: number;
}

export interface Dice {
  notation: string;
  output: string;
  total: number;
  stat: string;
  statValue: string;
}

export interface CommandFields {
  command: string;
  actionDice: Dice;
  challengeDice: {
    results: Array<number>;
    match: boolean;
  };
  actionResult: string;
}

export interface CommandMessage extends Message {
  fields: CommandFields;
}

export interface Message {
  id: number;
  type: string;
  text: string;
  date: Date;
  fields?: CommandFields;
}

export type Messages = Array<Message>;
