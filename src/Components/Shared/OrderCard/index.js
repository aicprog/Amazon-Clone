import React from 'react';
import { useUserContext } from '../../../Context/user.context';
import './OrderCard.css';
const OrderCard = () => {
	const columns = ['Order Placed', 'Total', 'Ship To'];
	const { currentUser } = useUserContext();
	return (
		<div className="order-card-wrapper">
			<div className="order-card-header-wrapper">
				<div className="order-card-header">
					{columns.map((column) => (
						<>
							<div className="order-card-header-column">{column}</div>
						</>
					))}
					<div className="order-card-header-info">
						{Date().split(' ').splice(1, 3).join(' ')}
					</div>
					<div className="order-card-header-info">$4.48</div>
					<div className="order-card-header-info">
						{currentUser?.displayName}
					</div>
				</div>
				<div className="order-card-header-right">
					<div className="order-card-header-column">
						Order # 113-9065915-2317835
					</div>
				</div>
			</div>

			<div className="order-card-left">
				<div className="order-card-info">
					<div className="order-card-arrival">Arriving Wednesday</div>

					<div className="order-card-item-info">
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/41HuUudhPbL._SY90_.jpg"
							alt="product-img"
						/>
						<div className="order-card-title">
							Aroma Housewaves 20 Cup Cooked(10 cup uncooked) Digital Rice
							Cooker
						</div>
					</div>
				</div>
				<div className="button-container">
					<button className="track-image-button button-container-button">
						Package Details
					</button>
					<button className="cancel-item button-container-button">
						Cancel Items
					</button>
				</div>
			</div>
		</div>
	);
};
export default OrderCard;
