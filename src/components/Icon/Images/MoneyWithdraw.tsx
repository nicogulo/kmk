/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const MoneyWithdraw: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M12 12C11.4067 12 10.8266 12.1759 10.3333 12.5056C9.83994 12.8352 9.45542 13.3038 9.22836 13.8519C9.0013 14.4001 8.94189 15.0033 9.05764 15.5853C9.1734 16.1672 9.45912 16.7018 9.87868 17.1213C10.2982 17.5409 10.8328 17.8266 11.4147 17.9424C11.9967 18.0581 12.5999 17.9987 13.1481 17.7716C13.6962 17.5446 14.1648 17.1601 14.4944 16.6667C14.8241 16.1734 15 15.5933 15 15C15 14.2044 14.6839 13.4413 14.1213 12.8787C13.5587 12.3161 12.7956 12 12 12ZM12 16C11.8022 16 11.6089 15.9414 11.4444 15.8315C11.28 15.7216 11.1518 15.5654 11.0761 15.3827C11.0004 15.2 10.9806 14.9989 11.0192 14.8049C11.0578 14.6109 11.153 14.4327 11.2929 14.2929C11.4327 14.153 11.6109 14.0578 11.8049 14.0192C11.9989 13.9806 12.2 14.0004 12.3827 14.0761C12.5654 14.1518 12.7216 14.28 12.8315 14.4444C12.9414 14.6089 13 14.8022 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16ZM11.29 9.71C11.3851 9.80104 11.4972 9.87241 11.62 9.92C11.7397 9.97291 11.8691 10.0002 12 10.0002C12.1309 10.0002 12.2603 9.97291 12.38 9.92C12.5028 9.87241 12.6149 9.80104 12.71 9.71L15 7.46C15.1936 7.26639 15.3024 7.0038 15.3024 6.73C15.3024 6.4562 15.1936 6.19361 15 6C14.8064 5.80639 14.5438 5.69762 14.27 5.69762C13.9962 5.69762 13.7336 5.80639 13.54 6L13 6.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V6.59L10.46 6C10.2664 5.80639 10.0038 5.69762 9.73 5.69762C9.4562 5.69762 9.19361 5.80639 9 6C8.80639 6.19361 8.69762 6.4562 8.69762 6.73C8.69762 7.0038 8.80639 7.26639 9 7.46L11.29 9.71ZM19 15C19 14.8022 18.9414 14.6089 18.8315 14.4444C18.7216 14.28 18.5654 14.1518 18.3827 14.0761C18.2 14.0004 17.9989 13.9806 17.8049 14.0192C17.6109 14.0578 17.4327 14.153 17.2929 14.2929C17.153 14.4327 17.0578 14.6109 17.0192 14.8049C16.9806 14.9989 17.0004 15.2 17.0761 15.3827C17.1518 15.5654 17.28 15.7216 17.4444 15.8315C17.6089 15.9414 17.8022 16 18 16C18.2652 16 18.5196 15.8946 18.7071 15.7071C18.8946 15.5196 19 15.2652 19 15ZM20 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10H20C20.2652 10 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H7C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9C8 8.73478 7.89464 8.48043 7.70711 8.29289C7.51957 8.10536 7.26522 8 7 8H4C3.20435 8 2.44129 8.31607 1.87868 8.87868C1.31607 9.44129 1 10.2044 1 11V19C1 19.7956 1.31607 20.5587 1.87868 21.1213C2.44129 21.6839 3.20435 22 4 22H20C20.7956 22 21.5587 21.6839 22.1213 21.1213C22.6839 20.5587 23 19.7956 23 19V11C23 10.2044 22.6839 9.44129 22.1213 8.87868C21.5587 8.31607 20.7956 8 20 8ZM5 15C5 15.1978 5.05865 15.3911 5.16853 15.5556C5.27841 15.72 5.43459 15.8482 5.61732 15.9239C5.80004 15.9996 6.00111 16.0194 6.19509 15.9808C6.38907 15.9422 6.56725 15.847 6.70711 15.7071C6.84696 15.5673 6.9422 15.3891 6.98079 15.1951C7.01937 15.0011 6.99957 14.8 6.92388 14.6173C6.84819 14.4346 6.72002 14.2784 6.55557 14.1685C6.39112 14.0586 6.19778 14 6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15Z'
            fill='currentColor'
        />
    </svg>
);
export default MoneyWithdraw;
