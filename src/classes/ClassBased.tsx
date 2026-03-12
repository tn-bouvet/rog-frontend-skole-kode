import { Component } from "react";

type Props = {
  num: number;
};

export class ClassBased extends Component<Props> {
  constructor(props: Props) {
    console.log("Class based component constructed");
    super(props);
  }

  override componentWillUnmount(): void {
    console.log("Class based component unmounting");
  }

  override render() {
    return <h1>Class based component #{this.props.num}</h1>;
  }
}
