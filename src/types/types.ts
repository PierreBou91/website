interface Article {
	id: string;
	title: string;
	slug: string;
	authors: number[];
	abstract: string;
	content: string;
	image_url: string;
	created_at: string;
	publication_date: string;
	likes: number;
	comments: string;
	tags: string[];
	is_deleted: boolean;
}

export type { Article };
