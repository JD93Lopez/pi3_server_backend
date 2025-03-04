export default interface DeleteTopicByIdUseCasePort {
    deleteTopicById(topicId: number): Promise<number>;
}