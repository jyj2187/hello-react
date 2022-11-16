import styles from "./CSSModule.module.scss";

const CSSModule = () => {
	return (
		// className={[styles.wrapper, styles.inverted].join(' ')}
		<div className={`${styles.wrapper} ${styles.inverted}`}>
			안녕하세요, 저는 <span className="something">CSSModule</span>
		</div>
	);
};

export default CSSModule;
