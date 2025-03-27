// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tts = (function() {

    /**
     * Namespace tts.
     * @exports tts
     * @namespace
     */
    var tts = {};

    tts.SendMessage = (function() {

        /**
         * Properties of a SendMessage.
         * @memberof tts
         * @interface ISendMessage
         * @property {tts.IStartSession|null} [startSession] SendMessage startSession
         * @property {tts.IPushText|null} [pushText] SendMessage pushText
         * @property {tts.IEos|null} [eos] SendMessage eos
         */

        /**
         * Constructs a new SendMessage.
         * @memberof tts
         * @classdesc Represents a SendMessage.
         * @implements ISendMessage
         * @constructor
         * @param {tts.ISendMessage=} [properties] Properties to set
         */
        function SendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessage startSession.
         * @member {tts.IStartSession|null|undefined} startSession
         * @memberof tts.SendMessage
         * @instance
         */
        SendMessage.prototype.startSession = null;

        /**
         * SendMessage pushText.
         * @member {tts.IPushText|null|undefined} pushText
         * @memberof tts.SendMessage
         * @instance
         */
        SendMessage.prototype.pushText = null;

        /**
         * SendMessage eos.
         * @member {tts.IEos|null|undefined} eos
         * @memberof tts.SendMessage
         * @instance
         */
        SendMessage.prototype.eos = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SendMessage payload.
         * @member {"startSession"|"pushText"|"eos"|undefined} payload
         * @memberof tts.SendMessage
         * @instance
         */
        Object.defineProperty(SendMessage.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["startSession", "pushText", "eos"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SendMessage instance using the specified properties.
         * @function create
         * @memberof tts.SendMessage
         * @static
         * @param {tts.ISendMessage=} [properties] Properties to set
         * @returns {tts.SendMessage} SendMessage instance
         */
        SendMessage.create = function create(properties) {
            return new SendMessage(properties);
        };

        /**
         * Encodes the specified SendMessage message. Does not implicitly {@link tts.SendMessage.verify|verify} messages.
         * @function encode
         * @memberof tts.SendMessage
         * @static
         * @param {tts.ISendMessage} message SendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startSession != null && Object.hasOwnProperty.call(message, "startSession"))
                $root.tts.StartSession.encode(message.startSession, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pushText != null && Object.hasOwnProperty.call(message, "pushText"))
                $root.tts.PushText.encode(message.pushText, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eos != null && Object.hasOwnProperty.call(message, "eos"))
                $root.tts.Eos.encode(message.eos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendMessage message, length delimited. Does not implicitly {@link tts.SendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.SendMessage
         * @static
         * @param {tts.ISendMessage} message SendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof tts.SendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.SendMessage} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.SendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.startSession = $root.tts.StartSession.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.pushText = $root.tts.PushText.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.eos = $root.tts.Eos.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.SendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.SendMessage} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessage message.
         * @function verify
         * @memberof tts.SendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.startSession != null && message.hasOwnProperty("startSession")) {
                properties.payload = 1;
                {
                    var error = $root.tts.StartSession.verify(message.startSession);
                    if (error)
                        return "startSession." + error;
                }
            }
            if (message.pushText != null && message.hasOwnProperty("pushText")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.tts.PushText.verify(message.pushText);
                    if (error)
                        return "pushText." + error;
                }
            }
            if (message.eos != null && message.hasOwnProperty("eos")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.tts.Eos.verify(message.eos);
                    if (error)
                        return "eos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.SendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.SendMessage} SendMessage
         */
        SendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.SendMessage)
                return object;
            var message = new $root.tts.SendMessage();
            if (object.startSession != null) {
                if (typeof object.startSession !== "object")
                    throw TypeError(".tts.SendMessage.startSession: object expected");
                message.startSession = $root.tts.StartSession.fromObject(object.startSession);
            }
            if (object.pushText != null) {
                if (typeof object.pushText !== "object")
                    throw TypeError(".tts.SendMessage.pushText: object expected");
                message.pushText = $root.tts.PushText.fromObject(object.pushText);
            }
            if (object.eos != null) {
                if (typeof object.eos !== "object")
                    throw TypeError(".tts.SendMessage.eos: object expected");
                message.eos = $root.tts.Eos.fromObject(object.eos);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.SendMessage
         * @static
         * @param {tts.SendMessage} message SendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.startSession != null && message.hasOwnProperty("startSession")) {
                object.startSession = $root.tts.StartSession.toObject(message.startSession, options);
                if (options.oneofs)
                    object.payload = "startSession";
            }
            if (message.pushText != null && message.hasOwnProperty("pushText")) {
                object.pushText = $root.tts.PushText.toObject(message.pushText, options);
                if (options.oneofs)
                    object.payload = "pushText";
            }
            if (message.eos != null && message.hasOwnProperty("eos")) {
                object.eos = $root.tts.Eos.toObject(message.eos, options);
                if (options.oneofs)
                    object.payload = "eos";
            }
            return object;
        };

        /**
         * Converts this SendMessage to JSON.
         * @function toJSON
         * @memberof tts.SendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendMessage
         * @function getTypeUrl
         * @memberof tts.SendMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.SendMessage";
        };

        return SendMessage;
    })();

    tts.ReceiveMessage = (function() {

        /**
         * Properties of a ReceiveMessage.
         * @memberof tts
         * @interface IReceiveMessage
         * @property {tts.IAudioData|null} [audioData] ReceiveMessage audioData
         * @property {tts.IFinished|null} [finished] ReceiveMessage finished
         * @property {tts.IError|null} [error] ReceiveMessage error
         */

        /**
         * Constructs a new ReceiveMessage.
         * @memberof tts
         * @classdesc Represents a ReceiveMessage.
         * @implements IReceiveMessage
         * @constructor
         * @param {tts.IReceiveMessage=} [properties] Properties to set
         */
        function ReceiveMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiveMessage audioData.
         * @member {tts.IAudioData|null|undefined} audioData
         * @memberof tts.ReceiveMessage
         * @instance
         */
        ReceiveMessage.prototype.audioData = null;

        /**
         * ReceiveMessage finished.
         * @member {tts.IFinished|null|undefined} finished
         * @memberof tts.ReceiveMessage
         * @instance
         */
        ReceiveMessage.prototype.finished = null;

        /**
         * ReceiveMessage error.
         * @member {tts.IError|null|undefined} error
         * @memberof tts.ReceiveMessage
         * @instance
         */
        ReceiveMessage.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ReceiveMessage payload.
         * @member {"audioData"|"finished"|"error"|undefined} payload
         * @memberof tts.ReceiveMessage
         * @instance
         */
        Object.defineProperty(ReceiveMessage.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["audioData", "finished", "error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ReceiveMessage instance using the specified properties.
         * @function create
         * @memberof tts.ReceiveMessage
         * @static
         * @param {tts.IReceiveMessage=} [properties] Properties to set
         * @returns {tts.ReceiveMessage} ReceiveMessage instance
         */
        ReceiveMessage.create = function create(properties) {
            return new ReceiveMessage(properties);
        };

        /**
         * Encodes the specified ReceiveMessage message. Does not implicitly {@link tts.ReceiveMessage.verify|verify} messages.
         * @function encode
         * @memberof tts.ReceiveMessage
         * @static
         * @param {tts.IReceiveMessage} message ReceiveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.audioData != null && Object.hasOwnProperty.call(message, "audioData"))
                $root.tts.AudioData.encode(message.audioData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                $root.tts.Finished.encode(message.finished, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.tts.Error.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiveMessage message, length delimited. Does not implicitly {@link tts.ReceiveMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.ReceiveMessage
         * @static
         * @param {tts.IReceiveMessage} message ReceiveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiveMessage message from the specified reader or buffer.
         * @function decode
         * @memberof tts.ReceiveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.ReceiveMessage} ReceiveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.ReceiveMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.audioData = $root.tts.AudioData.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.finished = $root.tts.Finished.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.error = $root.tts.Error.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiveMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.ReceiveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.ReceiveMessage} ReceiveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiveMessage message.
         * @function verify
         * @memberof tts.ReceiveMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiveMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.audioData != null && message.hasOwnProperty("audioData")) {
                properties.payload = 1;
                {
                    var error = $root.tts.AudioData.verify(message.audioData);
                    if (error)
                        return "audioData." + error;
                }
            }
            if (message.finished != null && message.hasOwnProperty("finished")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.tts.Finished.verify(message.finished);
                    if (error)
                        return "finished." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.tts.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReceiveMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.ReceiveMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.ReceiveMessage} ReceiveMessage
         */
        ReceiveMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.ReceiveMessage)
                return object;
            var message = new $root.tts.ReceiveMessage();
            if (object.audioData != null) {
                if (typeof object.audioData !== "object")
                    throw TypeError(".tts.ReceiveMessage.audioData: object expected");
                message.audioData = $root.tts.AudioData.fromObject(object.audioData);
            }
            if (object.finished != null) {
                if (typeof object.finished !== "object")
                    throw TypeError(".tts.ReceiveMessage.finished: object expected");
                message.finished = $root.tts.Finished.fromObject(object.finished);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".tts.ReceiveMessage.error: object expected");
                message.error = $root.tts.Error.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiveMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.ReceiveMessage
         * @static
         * @param {tts.ReceiveMessage} message ReceiveMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiveMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.audioData != null && message.hasOwnProperty("audioData")) {
                object.audioData = $root.tts.AudioData.toObject(message.audioData, options);
                if (options.oneofs)
                    object.payload = "audioData";
            }
            if (message.finished != null && message.hasOwnProperty("finished")) {
                object.finished = $root.tts.Finished.toObject(message.finished, options);
                if (options.oneofs)
                    object.payload = "finished";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.tts.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.payload = "error";
            }
            return object;
        };

        /**
         * Converts this ReceiveMessage to JSON.
         * @function toJSON
         * @memberof tts.ReceiveMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiveMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiveMessage
         * @function getTypeUrl
         * @memberof tts.ReceiveMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.ReceiveMessage";
        };

        return ReceiveMessage;
    })();

    tts.StartSession = (function() {

        /**
         * Properties of a StartSession.
         * @memberof tts
         * @interface IStartSession
         * @property {string|null} [voice] StartSession voice
         * @property {string|null} [id] StartSession id
         */

        /**
         * Constructs a new StartSession.
         * @memberof tts
         * @classdesc Represents a StartSession.
         * @implements IStartSession
         * @constructor
         * @param {tts.IStartSession=} [properties] Properties to set
         */
        function StartSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartSession voice.
         * @member {string} voice
         * @memberof tts.StartSession
         * @instance
         */
        StartSession.prototype.voice = "";

        /**
         * StartSession id.
         * @member {string} id
         * @memberof tts.StartSession
         * @instance
         */
        StartSession.prototype.id = "";

        /**
         * Creates a new StartSession instance using the specified properties.
         * @function create
         * @memberof tts.StartSession
         * @static
         * @param {tts.IStartSession=} [properties] Properties to set
         * @returns {tts.StartSession} StartSession instance
         */
        StartSession.create = function create(properties) {
            return new StartSession(properties);
        };

        /**
         * Encodes the specified StartSession message. Does not implicitly {@link tts.StartSession.verify|verify} messages.
         * @function encode
         * @memberof tts.StartSession
         * @static
         * @param {tts.IStartSession} message StartSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.voice != null && Object.hasOwnProperty.call(message, "voice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.voice);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified StartSession message, length delimited. Does not implicitly {@link tts.StartSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.StartSession
         * @static
         * @param {tts.IStartSession} message StartSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartSession message from the specified reader or buffer.
         * @function decode
         * @memberof tts.StartSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.StartSession} StartSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.StartSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.voice = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.StartSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.StartSession} StartSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartSession message.
         * @function verify
         * @memberof tts.StartSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.voice != null && message.hasOwnProperty("voice"))
                if (!$util.isString(message.voice))
                    return "voice: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a StartSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.StartSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.StartSession} StartSession
         */
        StartSession.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.StartSession)
                return object;
            var message = new $root.tts.StartSession();
            if (object.voice != null)
                message.voice = String(object.voice);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a StartSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.StartSession
         * @static
         * @param {tts.StartSession} message StartSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.voice = "";
                object.id = "";
            }
            if (message.voice != null && message.hasOwnProperty("voice"))
                object.voice = message.voice;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this StartSession to JSON.
         * @function toJSON
         * @memberof tts.StartSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartSession
         * @function getTypeUrl
         * @memberof tts.StartSession
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartSession.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.StartSession";
        };

        return StartSession;
    })();

    tts.PushText = (function() {

        /**
         * Properties of a PushText.
         * @memberof tts
         * @interface IPushText
         * @property {string|null} [session] PushText session
         * @property {string|null} [text] PushText text
         */

        /**
         * Constructs a new PushText.
         * @memberof tts
         * @classdesc Represents a PushText.
         * @implements IPushText
         * @constructor
         * @param {tts.IPushText=} [properties] Properties to set
         */
        function PushText(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushText session.
         * @member {string} session
         * @memberof tts.PushText
         * @instance
         */
        PushText.prototype.session = "";

        /**
         * PushText text.
         * @member {string} text
         * @memberof tts.PushText
         * @instance
         */
        PushText.prototype.text = "";

        /**
         * Creates a new PushText instance using the specified properties.
         * @function create
         * @memberof tts.PushText
         * @static
         * @param {tts.IPushText=} [properties] Properties to set
         * @returns {tts.PushText} PushText instance
         */
        PushText.create = function create(properties) {
            return new PushText(properties);
        };

        /**
         * Encodes the specified PushText message. Does not implicitly {@link tts.PushText.verify|verify} messages.
         * @function encode
         * @memberof tts.PushText
         * @static
         * @param {tts.IPushText} message PushText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified PushText message, length delimited. Does not implicitly {@link tts.PushText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.PushText
         * @static
         * @param {tts.IPushText} message PushText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushText message from the specified reader or buffer.
         * @function decode
         * @memberof tts.PushText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.PushText} PushText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.PushText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                case 2: {
                        message.text = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.PushText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.PushText} PushText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushText message.
         * @function verify
         * @memberof tts.PushText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a PushText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.PushText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.PushText} PushText
         */
        PushText.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.PushText)
                return object;
            var message = new $root.tts.PushText();
            if (object.session != null)
                message.session = String(object.session);
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a PushText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.PushText
         * @static
         * @param {tts.PushText} message PushText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.session = "";
                object.text = "";
            }
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this PushText to JSON.
         * @function toJSON
         * @memberof tts.PushText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushText
         * @function getTypeUrl
         * @memberof tts.PushText
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushText.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.PushText";
        };

        return PushText;
    })();

    tts.Eos = (function() {

        /**
         * Properties of an Eos.
         * @memberof tts
         * @interface IEos
         * @property {string|null} [session] Eos session
         */

        /**
         * Constructs a new Eos.
         * @memberof tts
         * @classdesc Represents an Eos.
         * @implements IEos
         * @constructor
         * @param {tts.IEos=} [properties] Properties to set
         */
        function Eos(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Eos session.
         * @member {string} session
         * @memberof tts.Eos
         * @instance
         */
        Eos.prototype.session = "";

        /**
         * Creates a new Eos instance using the specified properties.
         * @function create
         * @memberof tts.Eos
         * @static
         * @param {tts.IEos=} [properties] Properties to set
         * @returns {tts.Eos} Eos instance
         */
        Eos.create = function create(properties) {
            return new Eos(properties);
        };

        /**
         * Encodes the specified Eos message. Does not implicitly {@link tts.Eos.verify|verify} messages.
         * @function encode
         * @memberof tts.Eos
         * @static
         * @param {tts.IEos} message Eos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            return writer;
        };

        /**
         * Encodes the specified Eos message, length delimited. Does not implicitly {@link tts.Eos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.Eos
         * @static
         * @param {tts.IEos} message Eos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Eos message from the specified reader or buffer.
         * @function decode
         * @memberof tts.Eos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.Eos} Eos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.Eos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Eos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.Eos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.Eos} Eos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Eos message.
         * @function verify
         * @memberof tts.Eos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Eos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            return null;
        };

        /**
         * Creates an Eos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.Eos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.Eos} Eos
         */
        Eos.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.Eos)
                return object;
            var message = new $root.tts.Eos();
            if (object.session != null)
                message.session = String(object.session);
            return message;
        };

        /**
         * Creates a plain object from an Eos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.Eos
         * @static
         * @param {tts.Eos} message Eos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Eos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this Eos to JSON.
         * @function toJSON
         * @memberof tts.Eos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Eos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Eos
         * @function getTypeUrl
         * @memberof tts.Eos
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Eos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.Eos";
        };

        return Eos;
    })();

    tts.AudioData = (function() {

        /**
         * Properties of an AudioData.
         * @memberof tts
         * @interface IAudioData
         * @property {string|null} [session] AudioData session
         * @property {string|null} [audio] AudioData audio
         * @property {number|null} [sampleRate] AudioData sampleRate
         * @property {tts.AudioType|null} [audioType] AudioData audioType
         * @property {number|null} [channelCount] AudioData channelCount
         */

        /**
         * Constructs a new AudioData.
         * @memberof tts
         * @classdesc Represents an AudioData.
         * @implements IAudioData
         * @constructor
         * @param {tts.IAudioData=} [properties] Properties to set
         */
        function AudioData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AudioData session.
         * @member {string} session
         * @memberof tts.AudioData
         * @instance
         */
        AudioData.prototype.session = "";

        /**
         * AudioData audio.
         * @member {string} audio
         * @memberof tts.AudioData
         * @instance
         */
        AudioData.prototype.audio = "";

        /**
         * AudioData sampleRate.
         * @member {number} sampleRate
         * @memberof tts.AudioData
         * @instance
         */
        AudioData.prototype.sampleRate = 0;

        /**
         * AudioData audioType.
         * @member {tts.AudioType} audioType
         * @memberof tts.AudioData
         * @instance
         */
        AudioData.prototype.audioType = 0;

        /**
         * AudioData channelCount.
         * @member {number} channelCount
         * @memberof tts.AudioData
         * @instance
         */
        AudioData.prototype.channelCount = 0;

        /**
         * Creates a new AudioData instance using the specified properties.
         * @function create
         * @memberof tts.AudioData
         * @static
         * @param {tts.IAudioData=} [properties] Properties to set
         * @returns {tts.AudioData} AudioData instance
         */
        AudioData.create = function create(properties) {
            return new AudioData(properties);
        };

        /**
         * Encodes the specified AudioData message. Does not implicitly {@link tts.AudioData.verify|verify} messages.
         * @function encode
         * @memberof tts.AudioData
         * @static
         * @param {tts.IAudioData} message AudioData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            if (message.audio != null && Object.hasOwnProperty.call(message, "audio"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.audio);
            if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sampleRate);
            if (message.audioType != null && Object.hasOwnProperty.call(message, "audioType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.audioType);
            if (message.channelCount != null && Object.hasOwnProperty.call(message, "channelCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.channelCount);
            return writer;
        };

        /**
         * Encodes the specified AudioData message, length delimited. Does not implicitly {@link tts.AudioData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.AudioData
         * @static
         * @param {tts.IAudioData} message AudioData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AudioData message from the specified reader or buffer.
         * @function decode
         * @memberof tts.AudioData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.AudioData} AudioData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.AudioData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                case 2: {
                        message.audio = reader.string();
                        break;
                    }
                case 3: {
                        message.sampleRate = reader.int32();
                        break;
                    }
                case 4: {
                        message.audioType = reader.int32();
                        break;
                    }
                case 5: {
                        message.channelCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AudioData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.AudioData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.AudioData} AudioData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AudioData message.
         * @function verify
         * @memberof tts.AudioData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AudioData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            if (message.audio != null && message.hasOwnProperty("audio"))
                if (!$util.isString(message.audio))
                    return "audio: string expected";
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                if (!$util.isInteger(message.sampleRate))
                    return "sampleRate: integer expected";
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                switch (message.audioType) {
                default:
                    return "audioType: enum value expected";
                case 0:
                    break;
                }
            if (message.channelCount != null && message.hasOwnProperty("channelCount"))
                if (!$util.isInteger(message.channelCount))
                    return "channelCount: integer expected";
            return null;
        };

        /**
         * Creates an AudioData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.AudioData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.AudioData} AudioData
         */
        AudioData.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.AudioData)
                return object;
            var message = new $root.tts.AudioData();
            if (object.session != null)
                message.session = String(object.session);
            if (object.audio != null)
                message.audio = String(object.audio);
            if (object.sampleRate != null)
                message.sampleRate = object.sampleRate | 0;
            switch (object.audioType) {
            default:
                if (typeof object.audioType === "number") {
                    message.audioType = object.audioType;
                    break;
                }
                break;
            case "AUDIOTYPE_PCM16LE":
            case 0:
                message.audioType = 0;
                break;
            }
            if (object.channelCount != null)
                message.channelCount = object.channelCount | 0;
            return message;
        };

        /**
         * Creates a plain object from an AudioData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.AudioData
         * @static
         * @param {tts.AudioData} message AudioData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AudioData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.session = "";
                object.audio = "";
                object.sampleRate = 0;
                object.audioType = options.enums === String ? "AUDIOTYPE_PCM16LE" : 0;
                object.channelCount = 0;
            }
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            if (message.audio != null && message.hasOwnProperty("audio"))
                object.audio = message.audio;
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                object.sampleRate = message.sampleRate;
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                object.audioType = options.enums === String ? $root.tts.AudioType[message.audioType] === undefined ? message.audioType : $root.tts.AudioType[message.audioType] : message.audioType;
            if (message.channelCount != null && message.hasOwnProperty("channelCount"))
                object.channelCount = message.channelCount;
            return object;
        };

        /**
         * Converts this AudioData to JSON.
         * @function toJSON
         * @memberof tts.AudioData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AudioData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AudioData
         * @function getTypeUrl
         * @memberof tts.AudioData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AudioData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.AudioData";
        };

        return AudioData;
    })();

    tts.Finished = (function() {

        /**
         * Properties of a Finished.
         * @memberof tts
         * @interface IFinished
         * @property {string|null} [session] Finished session
         */

        /**
         * Constructs a new Finished.
         * @memberof tts
         * @classdesc Represents a Finished.
         * @implements IFinished
         * @constructor
         * @param {tts.IFinished=} [properties] Properties to set
         */
        function Finished(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Finished session.
         * @member {string} session
         * @memberof tts.Finished
         * @instance
         */
        Finished.prototype.session = "";

        /**
         * Creates a new Finished instance using the specified properties.
         * @function create
         * @memberof tts.Finished
         * @static
         * @param {tts.IFinished=} [properties] Properties to set
         * @returns {tts.Finished} Finished instance
         */
        Finished.create = function create(properties) {
            return new Finished(properties);
        };

        /**
         * Encodes the specified Finished message. Does not implicitly {@link tts.Finished.verify|verify} messages.
         * @function encode
         * @memberof tts.Finished
         * @static
         * @param {tts.IFinished} message Finished message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Finished.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            return writer;
        };

        /**
         * Encodes the specified Finished message, length delimited. Does not implicitly {@link tts.Finished.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.Finished
         * @static
         * @param {tts.IFinished} message Finished message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Finished.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Finished message from the specified reader or buffer.
         * @function decode
         * @memberof tts.Finished
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.Finished} Finished
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Finished.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.Finished();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Finished message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.Finished
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.Finished} Finished
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Finished.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Finished message.
         * @function verify
         * @memberof tts.Finished
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Finished.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            return null;
        };

        /**
         * Creates a Finished message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.Finished
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.Finished} Finished
         */
        Finished.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.Finished)
                return object;
            var message = new $root.tts.Finished();
            if (object.session != null)
                message.session = String(object.session);
            return message;
        };

        /**
         * Creates a plain object from a Finished message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.Finished
         * @static
         * @param {tts.Finished} message Finished
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Finished.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };

        /**
         * Converts this Finished to JSON.
         * @function toJSON
         * @memberof tts.Finished
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Finished.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Finished
         * @function getTypeUrl
         * @memberof tts.Finished
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Finished.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.Finished";
        };

        return Finished;
    })();

    /**
     * AudioType enum.
     * @name tts.AudioType
     * @enum {number}
     * @property {number} AUDIOTYPE_PCM16LE=0 AUDIOTYPE_PCM16LE value
     */
    tts.AudioType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AUDIOTYPE_PCM16LE"] = 0;
        return values;
    })();

    tts.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof tts
         * @interface IError
         * @property {string|null} [session] Error session
         * @property {string|null} [message] Error message
         */

        /**
         * Constructs a new Error.
         * @memberof tts
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {tts.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error session.
         * @member {string} session
         * @memberof tts.Error
         * @instance
         */
        Error.prototype.session = "";

        /**
         * Error message.
         * @member {string} message
         * @memberof tts.Error
         * @instance
         */
        Error.prototype.message = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof tts.Error
         * @static
         * @param {tts.IError=} [properties] Properties to set
         * @returns {tts.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link tts.Error.verify|verify} messages.
         * @function encode
         * @memberof tts.Error
         * @static
         * @param {tts.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link tts.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tts.Error
         * @static
         * @param {tts.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof tts.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tts.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tts.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.session = reader.string();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tts.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tts.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof tts.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tts.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tts.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.tts.Error)
                return object;
            var message = new $root.tts.Error();
            if (object.session != null)
                message.session = String(object.session);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tts.Error
         * @static
         * @param {tts.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.session = "";
                object.message = "";
            }
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof tts.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Error
         * @function getTypeUrl
         * @memberof tts.Error
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tts.Error";
        };

        return Error;
    })();

    return tts;
})();