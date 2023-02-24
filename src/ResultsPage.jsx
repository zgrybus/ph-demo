import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

export const ResultsPage = () => {
	const [ssr, setSsr] = useState('');
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const getSsr = async (resultId) => {
			try {
				const response = await fetch(`https://apimm.prhcdn.com/planner_results/${resultId}`);
				const { data } = await response.json()

				window.APP_STATE = data.data;
				setSsr(data.html);
					
				setTimeout(() => {
					const newScript = document.createElement("script");
					newScript.text = data.javascript;
					document.body.appendChild(newScript);
				})
			} catch(e) {	
				console.log('error: ', e)
			}
		};

		const resultId = searchParams.get('id');
		if(resultId) {
			getSsr(resultId);
		}
	}, []);

	return (
		<div>
			Results Page:
			<div id="result-page-root" dangerouslySetInnerHTML={{ __html: ssr }} />
		</div>
	)
}