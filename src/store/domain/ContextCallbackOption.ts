export default interface ContextCallbackOption {
  success?: <T>(responseData?: T) => void;
  catch?: (err?: Error) => void;
}
