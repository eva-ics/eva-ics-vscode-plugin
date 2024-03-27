import * as vscode from 'vscode';
import { disposable_generateStruct } from './disposable/generateStruct';
import { disposable_generateWERState } from './disposable/generateWERState';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('evaics.generateStruct', disposable_generateStruct));
	context.subscriptions.push(vscode.commands.registerCommand('evaics.generateWERState', disposable_generateWERState));
}

export function deactivate() {}