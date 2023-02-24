import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

export const ResultsPage = () => {
	const [ssrHTML, setSsrHTML] = useState('');
	const [ssrJS, setSsrJS] = useState('');
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const getSsr = async (resultId) => {
			try {
				const response = await fetch(`https://apimm.prhcdn.com/planner_results/${resultId}`);
				const { data } = await response.json()

				window.APP_STATE = data.data;
				setSsrHTML(data.html);
				setSsrJS(data.javascript);
			} catch(e) {	
				console.log('error: ', e)
			}
		};

		const resultId = searchParams.get('id');
		if(resultId) {
			getSsr(resultId);
		}
	}, []);

	useEffect(() => {
		if(ssrJS) {
			const newScript = document.createElement("script");
			newScript.text = ssrJS;
			document.body.appendChild(newScript);
			return () =>  document.body.removeChild(newScript)
		}
	}, [ssrJS])

	return (
		<div>
			Results Page:
			<div id="result-page-root" dangerouslySetInnerHTML={{ __html: ssrHTML }} />
		</div>
	)
}