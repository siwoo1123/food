import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Tests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problamList: [
                {
                    number: 0,
                    problam: '골격이 굵거나 살이 찐 편이다.',
                    yes: 1,
                    no: 2
                },
                {
                    number: 1,
                    problam: '뼈대가 굵고 단단한 편이다',
                    yes: 3,
                    no: 4
                },
                {
                    number: 2,
                    problam: '피부가 흰 편이다',
                    yes: 5,
                    no: 6
                },
                {
                    number: 3,
                    problam: '피로를 쉽게 느낀다',
                    yes: 8,
                    no: 7
                },
                {
                    number: 4,
                    problam: '땀이 자주난다',
                    yes: 7,
                    no: 8
                },
                {
                    number: 5,
                    problam: '손발이 차다',
                    yes: 9,
                    no: 6
                },
                {
                    number: 6,
                    problam: '소화가 잘 안되는 편이다',
                    yes: 10,
                    no: 13
                },
                {
                    number: 7,
                    problam: '창의력이 뛰어난 편이다',
                    yes: 11,
                    no: 12
                },
                {
                    number: 8,
                    problam: '걸음걸이가 안정적이다',
                    yes: 12,
                    no: 9
                },
                {
                    number: 9,
                    problam: '예민하고 스트레스가 많은 편이다',
                    yes: 6,
                    no: 13
                },
                {
                    number: 10,
                    problam: '우유부단하다',
                    yes: 14,
                    no: 22
                },
                {
                    number: 11,
                    problam: '깊은 잠을 못 자는 편이다',
                    yes: 15,
                    no: 16
                },
                {
                    number: 12,
                    problam: '눈, 코가 크고 입술이 뚜꺼운 편이다',
                    yes: 16,
                    no: 13
                },
                {
                    number: 13,
                    problam: '솔직하고 급한 성격을 가지고 있다',
                    yes: 17,
                    no: 20
                },
                {
                    number: 14,
                    problam: '땀이 적은 편이다',
                    yes: 18,
                    no: 27
                },
                {
                    number: 15,
                    problam: '앉아 있을 땐 어디에 기대거나 눕기를 좋아한다',
                    yes: 19,
                    no: 22
                },
                {
                    number: 16,
                    problam: '걸음이 빠른 편이다',
                    yes: 20,
                    no: 10
                },
                {
                    number: 17,
                    problam: '화를 잘 낸다',
                    yes: 21,
                    no: 18
                },
                {
                    number: 18,
                    problam: '한번 감성이 상하면 오래간다',
                    yes: 27,
                    no: 23
                },
                {
                    number: 19,
                    problam: '남의 잘못을 따지기를 좋아한다',
                    yes: 24,
                    no: 22
                },
                {
                    number: 20,
                    problam: '마음이 너그러운 편이다',
                    yes: 22,
                    no: 21
                },
                {
                    number: 21,
                    problam: '실증을 잘 낸다',
                    yes: 23,
                    no: 18
                },
                {
                    number: 22,
                    problam: '보수적이어서 변화를 싫어한다',
                    yes: 25,
                    no: 26
                },
                {
                    number: 23,
                    problam: '물을 거의 먹지 않는다',
                    yes: 26,
                    no: 27
                },
                {
                    number: 24,
                    problam: '태양인',
                    yes: -1,
                    no: -1
                },
                {
                    number: 25,
                    problam: '태음인',
                    yes: -1,
                    no: -1
                },
                {
                    number: 26,
                    problam: '소양인',
                    yes: -1,
                    no: -1
                },
                {
                    number: 27,
                    problam: '소음인',
                    yes: -1,
                    no: -1
                }
            ],
            lastProblam: 0,
            num: 1,
            clickY: () => {
                this.setState({
                    lastProblam: this.state.problamList[this.state.lastProblam].yes,
                    num: this.state.num+1
                })
            },
            clickN: () => {
                this.setState({
                    lastProblam: this.state.problamList[this.state.lastProblam].no,
                    num: this.state.num+1
                })
            }
        };
    }

    render() {
        return (
            <>
                { this.state.lastProblam>=24&&this.state.lastProblam
                    ? <>
                        <h1>검사 완료</h1>
                        { this.state.lastProblam === 24 && <Link to="/tayang">결과 보러가기</Link> }
                        { this.state.lastProblam === 25 && <Link to="/taeeum">결과 보러가기</Link> }
                        { this.state.lastProblam === 26 && <Link to="/soyang">결과 보러가기</Link> }
                        { this.state.lastProblam === 27 && <Link to="/soeeum">결과 보러가기</Link> }
                    </>
                    : <>
                        <h1>{this.state.num}. {this.state.problamList[this.state.lastProblam].problam}</h1>
                        <button onClick={this.state.clickY}>동의</button> <button onClick={this.state.clickN}>비동의</button>
                    </>
                }
            </>
        );
    }
}

export default Tests;