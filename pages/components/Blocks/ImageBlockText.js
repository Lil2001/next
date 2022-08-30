import styles from './LocationBlock.module.scss'
import Image from 'next/image'

export default function ImageBlockText() {
    return (
        <div
            className={styles.locationBlock__firstDiv__imageBlock}>
            <Image
                className={styles.locationBlock__firstDiv__imageDiv_imgfirst}
                src='/../public/images/Shape1.png'
                width={'270px'}
                height='300px'
                layout='fixed'
            />
            <div
            className={styles.locationBlock__firstDiv__imageBlock__textDiv}
            >
                <p>Сквер им. Высоцкого</p>
                <div className={styles.locationBlock__firstDiv__imageBlock__textDiv__small} >
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48222 13.0996C6.48222 13.0996 12.0018 9.68272 12.0018 5.69641C12.0018 4.33711 11.4203 3.03349 10.3851 2.07232C9.35003 1.11115 7.9461 0.571167 6.48222 0.571167C5.01834 0.571167 3.61441 1.11115 2.57929 2.07232C1.54417 3.03349 0.962646 4.33711 0.962646 5.69641C0.962646 9.68272 6.48222 13.0996 6.48222 13.0996ZM8.32225 5.69493C8.32225 6.63846 7.49852 7.40335 6.48239 7.40335C5.46627 7.40335 4.64254 6.63846 4.64254 5.69493C4.64254 4.7514 5.46627 3.98651 6.48239 3.98651C7.49852 3.98651 8.32225 4.7514 8.32225 5.69493Z" fill="#FF9635" />
                    </svg>
                    <p>Микрорайон “М”</p>
                </div>
            </div>
        </div>
    )
}