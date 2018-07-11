import React from 'react';
import {connect} from 'react-redux';
import {Card, Button, Input, Row, Col} from 'antd';
import {addNumber, countNumber, resetNumber, calcNumber} from '../action/index'

@connect(mapStateToProps,mapDispatchToProps)
class Counter extends React.Component {
    state = {
        OptNum: 0
    };

    handleOptNum(e) {
        this.setState({
            OptNum: e.target.value
        })
    }
    handleCalc(){
        this.props.calc(this.state.OptNum)
    }

    render() {
        return (<div>
            <div>
                <Card title="Counter - redux" hoverable  style={{width: 300}}>
                    <p>{this.props.number}</p>
                    <Button type="primary" onClick={this.props.add}>add</Button>
                    <Button className="lime-9" onClick={this.props.count}>reduce</Button>
                    <Button onClick={this.props.reset}>reset</Button>
                    <Row style={{margin:"10px 0"}}>
                        <Col>
                            <label htmlFor="text1">求和运算 </label>
                            <Input id="text1" onChange={this.handleOptNum.bind(this)} type="number" style={{width: "40%"}}/>
                            <Button onClick={this.handleCalc.bind(this)}>确认</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        number: state.Counter.number
    };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(addNumber()),
        count: () => dispatch(countNumber()),
        reset: () => dispatch(resetNumber()),
        calc: (num) => dispatch(calcNumber(num))
    };
}

export default Counter;