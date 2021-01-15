'use strict';

var ES = require('../').ES2019;
var boundES = require('./helpers/createBoundESNamespace')(ES);

var ops = require('../operations/2019');

var expectedMissing = [
	'AddRestrictedFunctionProperties',
	'AddWaiter',
	'agent-order',
	'AgentCanSuspend',
	'AgentSignifier',
	'AllocateArrayBuffer',
	'AllocateSharedArrayBuffer',
	'AllocateTypedArray',
	'AllocateTypedArrayBuffer',
	'AsyncFromSyncIteratorContinuation',
	'AsyncFunctionCreate',
	'AsyncFunctionStart',
	'AsyncGeneratorEnqueue',
	'AsyncGeneratorFunctionCreate',
	'AsyncGeneratorReject',
	'AsyncGeneratorResolve',
	'AsyncGeneratorResumeNext',
	'AsyncGeneratorStart',
	'AsyncGeneratorYield',
	'AsyncIteratorClose',
	'AtomicLoad',
	'AtomicReadModifyWrite',
	'Await', // macro
	'BackreferenceMatcher',
	'BlockDeclarationInstantiation',
	'BoundFunctionCreate',
	'Canonicalize',
	'CaseClauseIsSelected',
	'CharacterRangeOrUnion',
	'CharacterSetMatcher',
	'CloneArrayBuffer',
	'Completion',
	'ComposeWriteEventBytes',
	'Construct',
	'CopyDataBlockBytes',
	'CreateArrayFromList',
	'CreateArrayIterator',
	'CreateAsyncFromSyncIterator',
	'CreateBuiltinFunction',
	'CreateByteDataBlock',
	'CreateDynamicFunction',
	'CreateIntrinsics',
	'CreateListIteratorRecord',
	'CreateMapIterator',
	'CreateMappedArgumentsObject',
	'CreatePerIterationEnvironment',
	'CreateRealm',
	'CreateResolvingFunctions',
	'CreateSetIterator',
	'CreateSharedByteDataBlock',
	'CreateStringIterator',
	'CreateUnmappedArgumentsObject',
	'Decode',
	'DetachArrayBuffer',
	'Encode',
	'EnqueueJob',
	'EnterCriticalSection',
	'EnumerateObjectProperties',
	'EscapeRegExpPattern',
	'EvalDeclarationInstantiation',
	'EvaluateCall',
	'EvaluateNew',
	'EventSet',
	'ExecuteModule',
	'ForBodyEvaluation',
	'ForIn/OfBodyEvaluation',
	'ForIn/OfHeadEvaluation',
	'FulfillPromise',
	'FunctionAllocate',
	'FunctionCreate',
	'FunctionDeclarationInstantiation',
	'FunctionInitialize',
	'GeneratorFunctionCreate',
	'GeneratorResume',
	'GeneratorResumeAbrupt',
	'GeneratorStart',
	'GeneratorValidate',
	'GeneratorYield',
	'GetActiveScriptOrModule',
	'GetBase',
	'GetFunctionRealm',
	'GetGeneratorKind',
	'GetGlobalObject',
	'GetIdentifierReference',
	'GetModifySetValueInBuffer',
	'GetModuleNamespace',
	'GetNewTarget',
	'GetReferencedName',
	'GetSuperConstructor',
	'GetTemplateObject',
	'GetThisEnvironment',
	'GetThisValue',
	'GetValue',
	'GetValueFromBuffer',
	'GetViewValue',
	'GetWaiterList',
	'GlobalDeclarationInstantiation',
	'happens-before',
	'HasPrimitiveBase',
	'host-synchronizes-with',
	'HostEnsureCanCompileStrings',
	'HostEventSet',
	'HostPromiseRejectionTracker',
	'HostReportErrors',
	'HostResolveImportedModule',
	'IfAbruptRejectPromise',
	'ImportedLocalNames',
	'InitializeBoundName',
	'InitializeEnvironment',
	'InitializeHostDefinedRealm',
	'InitializeReferencedBinding',
	'InnerModuleEvaluation',
	'InnerModuleInstantiation',
	'IntegerIndexedElementGet',
	'IntegerIndexedElementSet',
	'IntegerIndexedObjectCreate',
	'InternalizeJSONProperty',
	'IsAnonymousFunctionDefinition',
	'IsDetachedBuffer',
	'IsInTailPosition',
	'IsLabelledFunction',
	'IsPropertyReference',
	'IsStrictReference',
	'IsSuperReference',
	'IsUnresolvableReference',
	'IsWordChar',
	'LeaveCriticalSection',
	'LocalTime',
	'LoopContinues', // completion records
	'MakeArgGetter',
	'MakeArgSetter',
	'MakeClassConstructor',
	'MakeConstructor',
	'MakeMethod',
	'MakeSuperPropertyReference',
	'max',
	'memory-order',
	'min',
	'ModuleNamespaceCreate',
	'NewDeclarativeEnvironment',
	'NewFunctionEnvironment',
	'NewGlobalEnvironment',
	'NewModuleEnvironment',
	'NewObjectEnvironment',
	'NewPromiseCapability',
	'NormalCompletion', // completion records
	'NotifyWaiter',
	'NumberToRawBytes',
	'ObjectDefineProperties',
	'OrdinaryCallBindThis',
	'OrdinaryCallEvaluateBody',
	'OrdinaryDelete',
	'OrdinaryGet',
	'OrdinaryIsExtensible',
	'OrdinaryOwnPropertyKeys',
	'OrdinaryPreventExtensions',
	'OrdinarySet',
	'OrdinarySetWithOwnDescriptor',
	'ParseModule',
	'ParseScript',
	'PerformEval',
	'PerformPromiseAll',
	'PerformPromiseRace',
	'PerformPromiseThen',
	'PrepareForOrdinaryCall',
	'PrepareForTailCall',
	'PromiseReactionJob',
	'PromiseResolveThenableJob',
	'ProxyCreate',
	'PutValue', // takes a Reference
	'RawBytesToNumber',
	'reads-bytes-from',
	'reads-from',
	'RegExpAlloc', // creates a regex with uninitialized internal lots
	'RegExpBuiltinExec',
	'RegExpInitialize', // initializes allocated regex's internal slots
	'RejectPromise',
	'RemoveWaiter',
	'RemoveWaiters',
	'RepeatMatcher',
	'ResolveBinding',
	'ResolveThisBinding',
	'ReturnIfAbrupt',
	'RunJobs',
	'ScriptEvaluation',
	'ScriptEvaluationJob',
	'SerializeJSONArray',
	'SerializeJSONObject',
	'SerializeJSONProperty',
	'SetDefaultGlobalBindings',
	'SetImmutablePrototype',
	'SetRealmGlobalObject',
	'SetValueInBuffer',
	'SetViewValue',
	'SharedDataBlockEventSet',
	'SortCompare', // mystery access to `comparefn` arg
	'Suspend',
	'SynchronizeEventSet',
	'synchronizes-with',
	'ThrowCompletion',
	'TimeZoneString', // depends on LocalTZA
	'TopLevelModuleEvaluationJob',
	'TriggerPromiseReactions',
	'TypedArrayCreate',
	'TypedArraySpeciesCreate',
	'UnicodeMatchProperty',
	'UnicodeMatchPropertyValue',
	'UpdateEmpty', // completion records
	'UTC', // depends on LocalTZA
	'ValidateAtomicAccess',
	'ValidateSharedIntegerTypedArray',
	'ValidateTypedArray',
	'ValueOfReadEvent',
	'WordCharacters' // depends on Canonicalize
];

require('./tests').es2019(boundES, ops, expectedMissing);

require('./helpers/runManifestTest')(require('tape'), ES, 2019);
