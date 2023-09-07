import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) =>{
    const itemValue = props.items.map(item => item.value);
    const totalMaxValue = Math.max(...itemValue)
    return (
        <div className='chart'>
            {props.items.map((item) =>
            <ChartBar 
            key={item.label} 
            value={item.value} 
            maxValue={totalMaxValue} 
            label={item.label}/>
            )}
        </div>
    )
}
export default Chart