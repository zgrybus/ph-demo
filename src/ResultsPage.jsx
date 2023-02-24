import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

export const ResultsPage = () => {
	const [ssr, setSsr] = useState(null);
	const [loading, setLoading] = useState(true);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const getSsr = async (resultId) => {
			try {
				setLoading(true);
				const { response } = await fetch(`https://apimm.prhcdn.com/planner_results/${resultId}`);
				const { data } = await respose.json()

				window.APP_STATE = data.data;
				setSsr(data.html)
					
				const newScript = document.createElement("script");
				newScript.text = data.javascript;
				document.body.appendChild(newScript);
			} catch(e) {	
				console.log('error: ', e)
			} finally {
				setLoading(false)
			}
		};

		const resultId = searchParams.get('id');
		if(resultId) {
			getSsr(resultId);
		}
	}, []);

	return (
		<div>
			Witam results
			{loading ? (
				<div>Getting SSR data</div>
			) : ssr ? (
				<div id="result-page-root" dangerouslySetInnerHTML={{ html: ssr.html }} />
			) : (
				<div>no ssr data</div>
			)}
		</div>
	)
}