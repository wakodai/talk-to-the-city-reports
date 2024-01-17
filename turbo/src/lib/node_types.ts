import NumberInputNode from '$components/graph/nodes/NumberInputNode.svelte';
import TextInputNode from '$components/graph/nodes/TextInputNode.svelte';
import PromptNode from '$components/graph/nodes/PromptNode.svelte';
import AudioNode from '$components/graph/nodes/AudioNode.svelte';
import CSVNode from '$components/graph/nodes/CSVNode.svelte';
import JSONNode from '$components/graph/nodes/JSONNode.svelte';
import TranslateNode from '$components/graph/nodes/TranslateNode.svelte';
import EditCSVNode from '$components/graph/nodes/EditCSVNode.svelte';
import GridNode from '$components/graph/nodes/GridNode.svelte';
import MarkdownNode from '$components/graph/nodes/MarkdownNode.svelte';
import DefaultNode from '$components/graph/nodes/DefaultNode.svelte';
import CodeMirrorNode from '$components/graph/nodes/CodeMirrorNode.svelte';
import ChatNode from '$components/graph/nodes/ChatNode.svelte';
import WhisperNode from '$components/graph/nodes/WhisperNode.svelte';
import FilterCSVNode from '$components/graph/nodes/FilterCSVNode.svelte';

export const nodeTypes = {
	text_input_v0: TextInputNode,
	prompt_v0: PromptNode,
	csv_v0: CSVNode,
	json_v0: JSONNode,
	participant_filter_v0: TextInputNode,
	number_input_v0: NumberInputNode,
	translate_v0: TranslateNode,
	edit_csv_v0: EditCSVNode,
	jsonata_v0: CodeMirrorNode,
	jq_v0: CodeMirrorNode,
	jq_v1: CodeMirrorNode,
	grid_v0: GridNode,
	markdown_v0: MarkdownNode,
	default_v0: DefaultNode,
	default: DefaultNode,
	merge_v0: DefaultNode,
	stringify_v0: DefaultNode,
	feedback_v0: DefaultNode,
	gpt_v0: PromptNode,
	python_v0: CodeMirrorNode,
	pyodide_v0: CodeMirrorNode,
	report_v0: DefaultNode,
	report_v1: DefaultNode,
	chat_v0: ChatNode,
	webpage_v0: TextInputNode,
	whisper_v0: WhisperNode,
	audio_v0: AudioNode,
	add_csv_v0: DefaultNode,
	filter_csv_v0: FilterCSVNode
};

// Autogenerated - do not edit ->

import '$lib/compute/add_csv_v0.ts';
import '$lib/compute/argument_extraction_llama.ts';
import '$lib/compute/argument_extraction_v0.ts';
import '$lib/compute/argument_extraction_v1.ts';
import '$lib/compute/audio_v0.ts';
import '$lib/compute/chat_v0.ts';
import '$lib/compute/cluster_extraction_v0.ts';
import '$lib/compute/cluster_extraction_v1.ts';
import '$lib/compute/count_tokens_v0.ts';
import '$lib/compute/csv_v0.ts';
import '$lib/compute/edit_csv_v0.ts';
import '$lib/compute/feedback_v0.ts';
import '$lib/compute/filter_csv_v0.ts';
import '$lib/compute/gpt_v0.ts';
import '$lib/compute/grid_v0.ts';
import '$lib/compute/jq_v0.ts';
import '$lib/compute/jq_v1.ts';
import '$lib/compute/json_v0.ts';
import '$lib/compute/jsonata_v0.ts';
import '$lib/compute/limit_csv_v0.ts';
import '$lib/compute/llama_v0.ts';
import '$lib/compute/markdown_v0.ts';
import '$lib/compute/merge_cluster_extraction_v0.ts';
import '$lib/compute/merge_v0.ts';
import '$lib/compute/open_ai_key_v0.ts';
import '$lib/compute/participant_filter_v0.ts';
import '$lib/compute/pyodide_v0.ts';
import '$lib/compute/python_v0.ts';
import '$lib/compute/report_v0.ts';
import '$lib/compute/report_v1.ts';
import '$lib/compute/score_argument_relevance_v0.ts';
import '$lib/compute/stringify_v0.ts';
import '$lib/compute/translate_v0.ts';
import '$lib/compute/webpage_v0.ts';
import '$lib/compute/whisper_v0.ts';

import add_csv_v0 from "$lib/compute/.plaintext/add_csv_v0.txt?raw"
import argument_extraction_llama from "$lib/compute/.plaintext/argument_extraction_llama.txt?raw"
import argument_extraction_v0 from "$lib/compute/.plaintext/argument_extraction_v0.txt?raw"
import argument_extraction_v1 from "$lib/compute/.plaintext/argument_extraction_v1.txt?raw"
import audio_v0 from "$lib/compute/.plaintext/audio_v0.txt?raw"
import chat_v0 from "$lib/compute/.plaintext/chat_v0.txt?raw"
import cluster_extraction_v0 from "$lib/compute/.plaintext/cluster_extraction_v0.txt?raw"
import cluster_extraction_v1 from "$lib/compute/.plaintext/cluster_extraction_v1.txt?raw"
import count_tokens_v0 from "$lib/compute/.plaintext/count_tokens_v0.txt?raw"
import csv_v0 from "$lib/compute/.plaintext/csv_v0.txt?raw"
import edit_csv_v0 from "$lib/compute/.plaintext/edit_csv_v0.txt?raw"
import feedback_v0 from "$lib/compute/.plaintext/feedback_v0.txt?raw"
import filter_csv_v0 from "$lib/compute/.plaintext/filter_csv_v0.txt?raw"
import gpt_v0 from "$lib/compute/.plaintext/gpt_v0.txt?raw"
import grid_v0 from "$lib/compute/.plaintext/grid_v0.txt?raw"
import jq_v0 from "$lib/compute/.plaintext/jq_v0.txt?raw"
import jq_v1 from "$lib/compute/.plaintext/jq_v1.txt?raw"
import json_v0 from "$lib/compute/.plaintext/json_v0.txt?raw"
import jsonata_v0 from "$lib/compute/.plaintext/jsonata_v0.txt?raw"
import limit_csv_v0 from "$lib/compute/.plaintext/limit_csv_v0.txt?raw"
import llama_v0 from "$lib/compute/.plaintext/llama_v0.txt?raw"
import markdown_v0 from "$lib/compute/.plaintext/markdown_v0.txt?raw"
import merge_cluster_extraction_v0 from "$lib/compute/.plaintext/merge_cluster_extraction_v0.txt?raw"
import merge_v0 from "$lib/compute/.plaintext/merge_v0.txt?raw"
import open_ai_key_v0 from "$lib/compute/.plaintext/open_ai_key_v0.txt?raw"
import participant_filter_v0 from "$lib/compute/.plaintext/participant_filter_v0.txt?raw"
import pyodide_v0 from "$lib/compute/.plaintext/pyodide_v0.txt?raw"
import python_v0 from "$lib/compute/.plaintext/python_v0.txt?raw"
import report_v0 from "$lib/compute/.plaintext/report_v0.txt?raw"
import report_v1 from "$lib/compute/.plaintext/report_v1.txt?raw"
import score_argument_relevance_v0 from "$lib/compute/.plaintext/score_argument_relevance_v0.txt?raw"
import stringify_v0 from "$lib/compute/.plaintext/stringify_v0.txt?raw"
import translate_v0 from "$lib/compute/.plaintext/translate_v0.txt?raw"
import webpage_v0 from "$lib/compute/.plaintext/webpage_v0.txt?raw"
import whisper_v0 from "$lib/compute/.plaintext/whisper_v0.txt?raw"

export const code = {add_csv_v0, argument_extraction_llama, argument_extraction_v0, argument_extraction_v1, audio_v0, chat_v0, cluster_extraction_v0, cluster_extraction_v1, count_tokens_v0, csv_v0, edit_csv_v0, feedback_v0, filter_csv_v0, gpt_v0, grid_v0, jq_v0, jq_v1, json_v0, jsonata_v0, limit_csv_v0, llama_v0, markdown_v0, merge_cluster_extraction_v0, merge_v0, open_ai_key_v0, participant_filter_v0, pyodide_v0, python_v0, report_v0, report_v1, score_argument_relevance_v0, stringify_v0, translate_v0, webpage_v0, whisper_v0}
