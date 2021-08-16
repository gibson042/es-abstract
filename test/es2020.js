'use strict';

var ES = require('../').ES2020;
var boundES = require('./helpers/createBoundESNamespace')(ES);

var ops = require('../operations/2020');

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
	'AsyncFunctionStart',
	'AsyncGeneratorEnqueue',
	'AsyncGeneratorReject',
	'AsyncGeneratorResolve',
	'AsyncGeneratorResumeNext',
	'AsyncGeneratorStart',
	'AsyncGeneratorYield',
	'AsyncIteratorClose',
	'AtomicLoad',
	'AtomicReadModifyWrite',
	'Await',
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
	'CreateForInIterator',
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
	'EnterCriticalSection',
	'EnumerateObjectProperties',
	'EscapeRegExpPattern',
	'EvalDeclarationInstantiation',
	'EvaluateCall',
	'EvaluateNew',
	'EvaluatePropertyAccessWithExpressionKey',
	'EvaluatePropertyAccessWithIdentifierKey',
	'EventSet',
	'ExecuteModule',
	'FinishDynamicImport',
	'ForBodyEvaluation',
	'ForIn/OfBodyEvaluation',
	'ForIn/OfHeadEvaluation',
	'FulfillPromise',
	'FunctionDeclarationInstantiation',
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
	'HostEnqueuePromiseJob',
	'HostEnsureCanCompileStrings',
	'HostEventSet',
	'HostFinalizeImportMeta',
	'HostGetImportMetaProperties',
	'HostImportModuleDynamically',
	'HostPromiseRejectionTracker',
	'HostResolveImportedModule',
	'IfAbruptRejectPromise',
	'ImportedLocalNames',
	'InitializeBoundName',
	'InitializeEnvironment',
	'InitializeHostDefinedRealm',
	'InitializeReferencedBinding',
	'InnerModuleEvaluation',
	'InnerModuleLinking',
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
	'IsValidIntegerIndex',
	'IsValidRegularExpressionLiteral',
	'IsWordChar',
	'LeaveCriticalSection',
	'LocalTime',
	'LocalTZA',
	'LoopContinues',
	'MakeArgGetter',
	'MakeArgSetter',
	'MakeBasicObject',
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
	'NewPromiseReactionJob',
	'NewPromiseResolveThenableJob',
	'NormalCompletion',
	'NotifyWaiter',
	'NumericToRawBytes',
	'ObjectDefineProperties',
	'OrdinaryCallBindThis',
	'OrdinaryCallEvaluateBody',
	'OrdinaryDelete',
	'OrdinaryFunctionCreate',
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
	'PerformPromiseAllSettled',
	'PerformPromiseRace',
	'PerformPromiseThen',
	'PrepareForOrdinaryCall',
	'PrepareForTailCall',
	'ProxyCreate',
	'PutValue', // takes a Reference
	'RawBytesToNumeric',
	'reads-bytes-from',
	'reads-from',
	'RegExpAlloc', // creates a regex with uninitialized internal lots
	'RegExpBuiltinExec',
	'RegExpInitialize', // initializes allocated regex's internal slots
	'RejectPromise',
	'RemoveWaiter',
	'RemoveWaiters',
	'RepeatMatcher',
	'RequireInternalSlot',
	'ResolveBinding',
	'ResolveThisBinding',
	'ReturnIfAbrupt',
	'ScriptEvaluation',
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
	'synchronizes-with',
	'ThrowCompletion',
	'TimeZoneString', // depends on LocalTZA
	'TriggerPromiseReactions',
	'TypedArrayCreate',
	'TypedArraySpeciesCreate',
	'UnicodeMatchProperty',
	'UnicodeMatchPropertyValue',
	'UpdateEmpty', // completion records
	'UTC', // depends on LocalTZA
	'UTF16Encode',
	'ValidateAtomicAccess',
	'ValidateSharedIntegerTypedArray',
	'ValidateTypedArray',
	'ValueOfReadEvent',
	'WordCharacters' // depends on Canonicalize
];

require('./tests').es2020(boundES, ops, expectedMissing);

require('./helpers/runManifestTest')(require('tape'), ES, 2020);
