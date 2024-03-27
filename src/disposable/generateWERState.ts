import * as vscode from 'vscode';
import { getEva, showError, EvaError, formatId } from "../common";

const supportedWERFileTypes = ['javascriptreact', 'typescriptreact'];

export const disposable_generateWERState = () => {
	const eva = getEva();
	const editor = vscode.window.activeTextEditor;
	if (editor) {
		let fileType = editor.document.languageId;
		if (!supportedWERFileTypes.includes(fileType)) {
			vscode.window.showErrorMessage('unsupported file type')
			return;
		}
		vscode.window.showQuickPick(eva.call("item.state", {"i":["lvar:#", "sensor:#", "unit:#"]})
			.catch((e: typeof EvaError) => showError(e))
			.then((result: any) => result.map((v: any) => v.oid).sort()), { placeHolder: 'Select an item OID' })
			.then((selection) => {
			if (selection) {
					const id = formatId(selection);
					const varName = id ? `state_${id}` : "state";
					const code = `const ${varName} = useEvaState({ oid: "${selection}" });\n`;
					editor.edit(editBuilder => {
						editBuilder.insert(editor.selection.start, code);
					});
				}
		});
	} else {
		vscode.window.showErrorMessage("no file opened");
	}
}