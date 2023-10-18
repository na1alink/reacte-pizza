import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
	const [item, setItem] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		fetch('https://652e76c00b8d8ddac0b16c07.mockapi.io/items')
			.then(res => {
				return res.json()
			})
			.then(arr => setItem(arr))
		setIsLoading(false)
	}, [])
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
					: item.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</>
	)
}

export default Home
