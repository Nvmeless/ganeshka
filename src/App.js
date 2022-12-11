import React, { useState } from 'react';
import './App.css';
import { Card } from './components/atoms/Card/Card';
import { Container } from './components/atoms/Container/Container';
import { Title } from './components/atoms/Title/Title';
import { ElementList } from './components/atoms/ElementList/ElementList';

function App() {

	const [directionMethode, setDirectionMethod] 			= useState('');
	const [marginMethode, setMarginMethod] 					= useState('');
	const [paddingMethode, setPaddingMethod] 				= useState('');
	const [alignItemMethode, setAlignItemMethod] 			= useState('');
	const [justifyContentMethode, setJustifyContentMethod] 	= useState('');

	const setDirectionHandler = ( e ) => {
		setDirectionMethod(e.target.value);
	}

	const setMarginHandler = ( e ) => {
		setMarginMethod(e.target.value);
	}

	const setPaddingHandler = ( e ) => {
		setPaddingMethod(e.target.value);
	}

	const setAlignItemHandler = ( e ) => {
		setAlignItemMethod(e.target.value);
	}

	const setJustifyContentHandler = ( e ) => {
		setJustifyContentMethod(e.target.value);
	}

	return (
		<div classvalue="App">
			<Title 
				title="Stack API"
			></Title>

			<Container
				direction={"row"}
				justifyContent={"space-between"}
			>
				{/* Direction */}
				<Container
					direction={"column"}
					justifyContent={"space-evenly"}
					alignItem={"start"}
				>
					<Title title={"Direction"}></Title>

					<ElementList
						value="row"
						isSelected= {directionMethode === "row"}
						label='row'
						changed={setDirectionHandler}
					>
					</ElementList>
					<ElementList
						value="row-reverse"
						isSelected= {directionMethode === "row-reverse"}
						label='row-reverse'
						changed={setDirectionHandler}
					>
					</ElementList>
					<ElementList
						value="column-reverse"
						isSelected= {directionMethode === "column-reverse"}
						label='column-reverse'
						changed={setDirectionHandler}
					>
					</ElementList>
					<ElementList
						value="column"
						isSelected= {directionMethode === "column"}
						label='column'
						changed={setDirectionHandler}
					>
					</ElementList>
					
				</Container>

				{/* Margin */}
				<Container
					direction={"column"}
					justifyContent={"space-evenly"}
					alignItem={"start"}
				>
					<Title title={"Margin"}></Title>
				<ElementList
					value="10"
					isSelected= {marginMethode === "10"}
					label='10 px'
					changed={setMarginHandler}
				>
				</ElementList>
				<ElementList
					value="15"
					isSelected= {marginMethode === "15"}
					label='15 px'
					changed={setMarginHandler}
				>
				</ElementList>
				<ElementList
					value="20"
					isSelected= {marginMethode === "20"}
					label='20 px'
					changed={setMarginHandler}
				>
				</ElementList>
				</Container>

				{/* Padding */}
				<Container
					direction={"column"}
					justifyContent={"space-evenly"}
					alignItem={"start"}
				>
					<Title title={"Padding"}></Title>
				<ElementList
					value="10"
					isSelected= {paddingMethode === "10"}
					label='10 px'
					changed={setPaddingHandler}
				>
				</ElementList>
				<ElementList
					value="15"
					isSelected= {paddingMethode === "15"}
					label='15 px'
					changed={setPaddingHandler}
				>
				</ElementList>
				<ElementList
					value="20"
					isSelected= {paddingMethode === "20"}
					label='20 px'
					changed={setPaddingHandler}
				>
				</ElementList>
				</Container>

				{/* Align-item */}
				<Container
					direction={"column"}
					justifyContent={"space-evenly"}
					alignItem={"start"}
				>
					<Title title={"Align-item"}></Title>
				<ElementList
					value="start"
					isSelected= {alignItemMethode === "start"}
					label='start'
					changed={setAlignItemHandler}
				>
				</ElementList>
				<ElementList
					value="center"
					isSelected= {alignItemMethode === "center"}
					label='center'
					changed={setAlignItemHandler}
				>
				</ElementList>
				<ElementList
					value="end"
					isSelected= {alignItemMethode === "end"}
					label='end'
					changed={setAlignItemHandler}
				>
				</ElementList>
				<ElementList
					value="flex-start"
					isSelected= {alignItemMethode === "flex-start"}
					label='flex-start'
					changed={setAlignItemHandler}
				>
				</ElementList>
				<ElementList
					value="flex-end"
					isSelected= {alignItemMethode === "flex-end"}
					label='flex-end'
					changed={setAlignItemHandler}
				>
				</ElementList>
				</Container>

				{/* Justify-content */}
				<Container
					direction={"column"}
					justifyContent={"space-evenly"}
					alignItem={"start"}
				>
					<Title title={"Justify-content"}></Title>
				<ElementList
					value="start"
					isSelected= {justifyContentMethode === "start"}
					label='start'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				<ElementList
					value="center"
					isSelected= {justifyContentMethode === "center"}
					label='center'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				<ElementList
					value="end"
					isSelected= {justifyContentMethode === "end"}
					label='end'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				<ElementList
					value="space-between"
					isSelected= {justifyContentMethode === "space-between"}
					label='space-between'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				<ElementList
					value="space-around"
					isSelected= {justifyContentMethode === "space-around"}
					label='space-around'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				<ElementList
					value="space-evenly"
					isSelected= {justifyContentMethode === "space-evenly"}
					label='space-evenly'
					changed={setJustifyContentHandler}
				>
				</ElementList>
				</Container>
			</Container>
			
			<Title title={"Test dynamique"}></Title>
			<Container
				margin={marginMethode}
				direction={directionMethode}
				backgroundColor={"blue"}
				padding={paddingMethode}
				alignItem={alignItemMethode}
				justifyContent={justifyContentMethode}
			>
				<Card backgroundColor={"red"} height="10px" width={"20%"}>Meswsage1</Card>
				<Card backgroundColor={"red"} height="10px" width={"20%"}>Meswsage2</Card>
				<Card backgroundColor={"red"} height="10px" width={"20%"}>Meswsage3</Card>

			</Container>
		</div>


	);
}

export default App;
