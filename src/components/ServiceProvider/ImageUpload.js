import Styles from '../../styles/ServiceProvider/ImageUpload.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';


function Upload() {
    return (
        <div className={Styles.Cont}>
            <div className={Styles.header}>
                <div className={Styles.titleH}>John Doe, List your vehicle</div>
                <div className={Styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</div>
            </div>
            <div className={Styles.steps}>
                <div className={Styles.line}></div>
                <div className={Styles.step}><div className={Styles.textO}>01</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.textO}>02</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.textO}>03</div></div>
            </div>
            <div className={Styles.sectionTitle}>Upload Vehicle Image And Document Images</div>
            <div className={Styles.vehiculeInfoCont}>
                <div className={Styles.box}>
                    <div className={Styles.boxT}>
                        <div className={Styles.file_upload}>
                            <div className={Styles.label}>Upload Vehicle Images</div>
                            <div className={Styles.file_upload_container}>
                                <label className={Styles.file_upload_label}>
                                    <div className={Styles.file_upload_text}>Maximum Size 5MB</div>
                                    <div className={Styles.file_upload_button}>Upload</div>
                                    <input
                                        type="file"
                                        className={Styles.file_upload_input}
                                        accept="image/*,.pdf" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.box}>
                    <div className={Styles.boxT}>
                        <div className={Styles.file_upload}>
                            <div className={Styles.label}>Upload Vehicle Registration Document</div>
                            <div className={Styles.file_upload_container}>
                                <label className={Styles.file_upload_label}>
                                    <div className={Styles.file_upload_text}>Maximum Size 5MB</div>
                                    <div className={Styles.file_upload_button}>Upload</div>
                                    <input
                                        type="file"
                                        className={Styles.file_upload_input}
                                        accept="image/*,.pdf" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.box}>
                    <div className={Styles.boxT}>
                        <div className={Styles.file_upload}>
                            <div className={Styles.label}>Upload Vehicle Insurance Documents</div>
                            <div className={Styles.file_upload_container}>
                                <label className={Styles.file_upload_label}>
                                    <div className={Styles.file_upload_text}>Maximum Size 5MB</div>
                                    <div className={Styles.file_upload_button}>Upload</div>
                                    <input
                                        type="file"
                                        className={Styles.file_upload_input}
                                        accept="image/*,.pdf" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='/memberShip' className={Styles.btn}>Continue</Link>
            </div>
        </div>
    )
}
export default Upload;