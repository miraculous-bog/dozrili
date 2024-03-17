// MemberCard.jsx
import React from 'react';
import styles from './cardMember.module.scss';

function CardMember({ name, role, imageSrc }) {
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
