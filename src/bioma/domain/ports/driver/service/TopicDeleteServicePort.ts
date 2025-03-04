
export interface TopicDeleteServicePort {
    deleteTopicById(topicId: number): Promise<number>;
}