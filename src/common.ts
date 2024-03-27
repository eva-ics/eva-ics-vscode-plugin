import * as vscode from 'vscode';

export const webengine = require('@eva-ics/webengine');
export const Eva = webengine.Eva;
export const EvaError = webengine.EvaError;

export const getEva = (vsConfig?: vscode.WorkspaceConfiguration): typeof Eva => {
	let config = vsConfig || vscode.workspace.getConfiguration('evaics');
	const apiUrl = config.get('apiUrl') as string;
	const apiKey = config.get('apiKey') as string;

	const eva = new Eva();
	eva.api_uri = apiUrl;
	eva.api_token = apiKey;
	return eva;
}

export const showError = (e: typeof EvaError) => {
	const msg = `${e.message} (${e.code})`;
	vscode.window.showErrorMessage(msg);
}

export const formatId = (oid: string): string => {
    /*const parts = oid.split(':');
    if (parts.length !== 2) return '';

    const path = parts[1];
    const pathParts = path.split('/');
    const id = pathParts.pop() || '';
	return id;*/
    return oid.replace(/[^a-zA-Z0-9_$]/g, '_');
}