// MemberCard.jsx
import React from 'react';
import styles from './cardMember.module.scss';

function CardMember({ name, role, imageSrc }) {
  const path = 'https://github.com/miraculous-bog/dozrili/blob/main/src/content_images/photos/team_bohdan_turiv.png';
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={`Фото ${name}`} className={styles.photo} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}

export default CardMember;
