import * as vscode from 'vscode';
import { getEva, showError, EvaError } from "../common";

export const disposable_generateStruct = () => {
	const config = vscode.workspace.getConfiguration('evaics');
	const eva = getEva(config);
	const editor = vscode.window.activeTextEditor;
	if (editor) {
		let fileType = editor.document.languageId;
		if (fileType === "cpp") {
			fileType = "c";
		}
		let lang_config: any = null;
		switch (fileType) {
			case "rust":
				lang_config = config.get("rustGeneratorConfig");
				break; 
		}
		vscode.window.showQuickPick(eva.call("dobj.list")
			.catch((e: typeof EvaError) => showError(e))
			.then((result: any) => result.map((v: any) => v.name)), { placeHolder: 'Select a data object' })
			.then((selection) => {
			if (selection) {
				eva.call("dobj.generate_struct_code", {i: selection, lang: fileType, config: lang_config}).catch((e: typeof EvaError) => showError(e)).then((result: any)=>{
					editor.edit(editBuilder => {
						editBuilder.insert(editor.selection.start, `${result.code}\n`);
					});
				})
			}
		});
	} else {
		vscode.window.showErrorMessage("no file opened");
	}
}