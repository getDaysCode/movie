/**
 * Created by Maple on 17/3/17.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const defaultFlatButtonBackgroundColor = 'rgb(255, 255, 255)';
const primaryFlatButtonBackgroundColor = 'rgb(200, 200, 200)';

const categoryData = ['全部', '电影', '电视剧', '动画', '综艺'];
const countryData = ['全部', '美国', '英国', '日本', '韩国','中国'];

const style = {
    mainDiv: {
        width: '100%',
    },
    paper: {
        width: '100%',
    },
    selectorLineDiv: {
        display: '-webkit-flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
};

export default class Selector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    };

    //TODO !!!!!!!!怎样在onclick中传参 this.handleOnClick.bind(this, index)

    render() {
        return (
            <div style={style.mainDiv}>
                <Paper style={style.paper}>
                    <div style={style.selectorLineDiv}>
                        {categoryData.map((data, index) => (
                            <FlatButton
                                key={index}
                                label={data}
                                backgroundColor={this.props.currentCategoryTag == data ? primaryFlatButtonBackgroundColor : defaultFlatButtonBackgroundColor}
                                onTouchTap={() => this.props.handleOnClickCategoryButton(data)}
                            />
                            )
                        )}
                    </div>
                    <div style={style.selectorLineDiv}>
                        {countryData.map((data, index) => (
                                <FlatButton
                                    key={index}
                                    label={data}
                                    backgroundColor={this.props.currentCountryTag == data ? primaryFlatButtonBackgroundColor : defaultFlatButtonBackgroundColor}
                                    onTouchTap={() => this.props.handleOnClickCountryButton(data)}
                                />
                            )
                        )}
                    </div>
                </Paper>
            </div>
        )
    }
}