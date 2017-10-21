import React from 'react';

export default class Access extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isReady: false };
  }

  componentWillMount () {
    this.props.onWillMount('Access');

    if (!this.state.isReady) {
      setTimeout(() => {
        this.setState({ ...this.state, isReady: true });
        this.props.onReady();
      }, 3000);
    }
  }

  componentWillUnmount () {
    this.props.onWillUnmount('Access');
  }

  render () {
    return (
      <section className="access">
        <h2 className="access__header">
          ACCESS
        </h2>
        <article className="access__article">
          恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。
          自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。
          自分は停車場のブリッジを、上って、降りて、そうしてそれが線路をまたぎ越えるために造られたものだという事には全然気づかず、
          ただそれは停車場の構内を外国の遊戯場みたいに、複雑に楽しく、ハイカラにするためにのみ、
          設備せられてあるものだとばかり思っていました。
          しかも、かなり永い間そう思っていたのです。
        </article>
      </section>
    );
  }
}
