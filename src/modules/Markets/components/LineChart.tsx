// import dayjs from 'dayjs';
// import { useTranslation } from 'react-i18next';
// import dynamic from 'next/dynamic';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';

interface Options {
    data?: number[];
    colorLine?: string;
}
const getOptions = (opt: Options): Highcharts.Options => {
    return {
        chart: {
            type: 'line',
            height: 56,
            width: 90,
            marginLeft: 0,
            spacingRight: 0,
            backgroundColor: 'transparent',
            animation: true
        },
        title: undefined,
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        tooltip: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },

        navigator: {
            enabled: false
        },
        time: {
            useUTC: false
        },
        series: [
            {
                // data: opt?.data?.map((d) => [(d[0] ?? 0) * 1000, d[2]]),
                data: opt?.data?.map((d) => ({
                    y: d
                })),
                type: 'line',
                label: {
                    enabled: false
                },
                color: opt.colorLine ?? '#4B5563',
                marker: {
                    enabled: false
                },
                lineWidth: 1.8,
                threshold: null,
                findNearestPointBy: 'x'
            }
        ],
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                }
            },
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        }
    };
};

interface Props {
    data?: number[];
    colorLine?: string;
}

const LineChart = ({ data, colorLine }: Props) => {
    const id = useMemo(() => Math.random().toString(36).substring(7), []);

    const options = useMemo(() => getOptions({ colorLine, data }), [colorLine, data]);
    return (
        <div className='flex flex-col gap-3' id={`chart-${id}`}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default LineChart;
