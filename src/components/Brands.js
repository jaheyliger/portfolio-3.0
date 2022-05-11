import React from 'react';
import { brands } from '../data';

const Brands = () => {
	return (
		<section className='min-h-[146px] bg-tertiary flex items-center'>
			<div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly mt-3 md:mt-0'>
				{brands.map((brand, index) => (
					<div key={index} className='m-2'>
						<img src={brand.img} alt='brand' />
					</div>
				))}
			</div>
		</section>
	);
};

export default Brands;
