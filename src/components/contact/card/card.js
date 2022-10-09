import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../global.css'
import classes from './card.module.scss';

const CardComponent = () => {
    const dataContact = [
        {
            name: 'Email',
            value: 'santiriva19@gmail.com'
        },
        {
            name: 'Phone number',
            value: '(+57) 300-3805184'
        },
        {
            name: 'Intagram',
            value: '@lotocode'
        },
    ]

    return(
        <div className={classes["container"]} style={{animation:'fade_in 0.5s ease'}}>
            <h1>Let's get in touch!</h1>
            <div style={{display: 'flex', height:'50%'}}>
                <div className={classes["container_img"]}>
                    <img src="https://i.ibb.co/cQp6J2n/Imagen-3.png" alt="Img-me" border="0"/>
                </div>
                <div className={classes["info_card"]}>
                    {
                        dataContact.map((element, index) => 
                            <div key={index} className={classes["row_info"]}>
                                <p className={classes["title"]}>{element.name}:</p>
                                <p>{element.value}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={classes['container_button']}>
                <Link to="/CV_Santiago_Rivadeneira.pdf" target="_blank" download className={classes["button_redirect_white"]}>
                    <FontAwesomeIcon 
                        icon={faMousePointer}
                        className={classes["icon_button_white"]}
                        size="2x"
                    />
                    <p>Download my CV</p>
                </Link>
            </div>
        </div>
    )
}
export default CardComponent